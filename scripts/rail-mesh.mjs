// Export the very same Three.js instances and camera poses for headless EGL projection.
import * as THREE from 'three';
import {mkdir,writeFile} from 'node:fs/promises';
import {createRailSet} from '../src/rail-world.js';
const {scene,camera,near,far,position}=createRailSet(16,9);
scene.updateMatrixWorld(true);
const packed=[];
const point=new THREE.Vector3(),normal=new THREE.Vector3(),matrix=new THREE.Matrix4();
const instance=new THREE.Matrix4(),normals=new THREE.Matrix3();
scene.traverse(mesh=>{
  if(!mesh.isMesh)return;
  let branch=mesh,id=0;
  while(branch){if(branch.userData.trainId)id=branch.userData.trainId;branch=branch.parent;}
  const geo=mesh.geometry,indices=geo.index,xyz=geo.attributes.position,n=geo.attributes.normal;
  const c=mesh.material.color.clone().convertLinearToSRGB();
  for(let i=0;i<(mesh.isInstancedMesh?mesh.count:1);i++){
    matrix.copy(mesh.matrixWorld);
    if(mesh.isInstancedMesh){mesh.getMatrixAt(i,instance);matrix.multiply(instance);}
    normals.getNormalMatrix(matrix);
    for(let k=0;k<(indices?indices.count:xyz.count);k++){
      const j=indices?indices.getX(k):k;
      point.fromBufferAttribute(xyz,j).applyMatrix4(matrix);
      normal.fromBufferAttribute(n,j).applyMatrix3(normals).normalize();
      packed.push(point.x,point.y,point.z,normal.x,normal.y,normal.z,c.r,c.g,c.b,id);
    }
  }
});
const frames=[];
for(let i=0;i<264;i++){
  position(i/12);
  frames.push({m:new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse).toArray(),
    near:near.position.x,far:far.position.x,eye:camera.position.toArray()});
}
await mkdir('.cache',{recursive:true});
await writeFile('.cache/rail-mesh.bin',Buffer.from(new Float32Array(packed).buffer));
await writeFile('.cache/rail-camera.json',JSON.stringify(frames));
