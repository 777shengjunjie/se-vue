import { type } from "os"

export type Deformation = {
    id : number;
    crashTime : number;
    deformationX : number;
    projectId : number;
}

export type SlaveSimDataProject = {
    projectId : number;
    name : String;
}

export type SlaveSimDataUploadDto = {
    projectName : String;
    dataType : number;
}