import type * as THREE from 'three';
import { FloorGenerator } from './Geometry/FloorGenerator'
import { AnimalsGenerator } from './Animals/AnimalsGenerator'
import type { AnimalEventDispatcher } from './Animals/AnimalEventDispatcher';
import type { Scene } from './Scene/Scene';
import { Animal, RARITY } from './Animals/Animal';
import { AnimalModel, AnimalsModels } from './Types/AnimalModelsPathTypes.ts';
import { randInt } from 'three/src/math/MathUtils';
import type { Camera } from './Camera/Camera';
import type { Chunk } from './Chunk/Chunk';


export class SafariGenerator{
    private animalGenerator: AnimalsGenerator;
    private floorGenerator: FloorGenerator;
    private isFirstAnimal: boolean = true;
    public constructor(animalEventDispatcher: AnimalEventDispatcher){
        this.animalGenerator = new AnimalsGenerator(animalEventDispatcher);
        this.floorGenerator = new FloorGenerator(); 
    }
    
    public add(animalIndex: number, acheivedFrom: string){
        const index = animalIndex;
        if(this.isFirstAnimal) {
            this.animalGenerator.addAnimal(new Animal(AnimalsModels[index].imagePath, AnimalsModels[index].model,(this.floorGenerator.chunks.children[0] as Chunk).randomAnimalPosition, AnimalsModels[index].name, AnimalsModels[index].rarity, acheivedFrom, AnimalsModels[index].rotation, AnimalsModels[index].scale));    
            this.isFirstAnimal = false;
        }
        else{
            const animalPosition = this.floorGenerator.addChunk().randomAnimalPosition;
            const newAnimal = new Animal(AnimalsModels[index].imagePath, AnimalsModels[index].model,animalPosition, AnimalsModels[index].name, AnimalsModels[index].rarity, acheivedFrom, AnimalsModels[index].rotation,  AnimalsModels[index].scale)
            this.animalGenerator.addAnimal(newAnimal);    
        }
    }

    public appendInScene(scene: Scene): void{
        this.floorGenerator.appednInScene(scene);
        this.animalGenerator.appednInScene(scene);
    }
    
    public processMouseMovement(mousePos: THREE.Vector2, camera: Camera){
        this.animalGenerator.checkForMouseHover(mousePos, camera)
    }
    
    public update(isLSDUpdateON: boolean = false){
        this.animalGenerator.animals.children.forEach(element=> {
            isLSDUpdateON ? (element as Animal).lsd_update() : (element as Animal).update() ;
        });
    }
}  