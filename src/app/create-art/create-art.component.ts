import { Component, OnInit } from '@angular/core';
import { ApolloService } from '../services/apollo.service';

@Component({
  selector: 'app-create-art',
  templateUrl: './create-art.component.html',
  styleUrls: ['./create-art.component.scss']
})
export class CreateArtComponent implements OnInit {
  selectedSize:any
  selectedFace:any
  selectedFrame = {
    Price: 2000
  }
  isFrameSelected!:boolean
  totalCost!:number
  sizes:any
  faces:any
  image:any
  fileSize:any
  fileName:any
  file:any
  validFile:any
  uploadStarted:any
  errorMsg:any
  fileUploaded!:boolean
  arts: any

  isSpinning: boolean = false
  
  constructor(private apollo: ApolloService) { }
  ngOnInit(): void {
    this.apollo.getFaceOptions().subscribe((result:any) => {
      console.log(result)
      this.faces = result.data.faceOptions.data.map((val:any)=>val.attributes).sort((prev:any,next:any)=>prev.Face-next.Face)
    })
    this.apollo.getSizeOptions().subscribe((result:any) => {
      console.log(result)
      this.sizes = result.data.sizeOptions.data.map((val:any)=>val.attributes)
    })
    
  }
  
  onSelectSize(size:any){
    this.selectedSize = size
    if(this.selectedSize.Price && this.selectedFace?.Price){
      this.getTotalCost()
    } 
    console.log(this.totalCost)
  }
  onSelectFace(face:any){
    this.selectedFace = face
    if(this.selectedSize?.Price && this.selectedFace?.Price){
      this.getTotalCost()
    } 
    console.log(this.totalCost)
  }
  onFrameSelect(val:boolean){
    this.isFrameSelected = val 
    this.getTotalCost()

  }
  getTotalCost(){
    if(this.selectedSize?.Price && this.selectedFace?.Price){
      this.totalCost = this.selectedSize.Price + this.selectedFace.Price + (this.isFrameSelected && this.selectedFrame.Price)
    }
  }

  onFileUpload(e: any) {
    const files = e.target.files
    this.fileSize = ((files[0].size) / (1024)).toFixed(2)
    this.fileName = files[0].name
    this.file = e.target.files[0]
    this.validFile = this.Validate(this.file.type, (files[0].size))
    console.log(this.validFile)
    if(this.validFile){
      this.uploadStarted = true
      const reader = new FileReader()
      reader.addEventListener("progress", event => {
        let width = Math.floor((event.loaded / event.total) * 100)
        // this.progressBarWidth = width
        if (width === 100) {
          this.fileUploaded = true
        }
      })
      reader.readAsBinaryString(files[0])
    }else{

    }
  }
  Validate(type:any, size:any) {
    if (type) {
      var pattern = /image-*/;
      if (!type.match(pattern)) {
        console.log("Invalid")
        alert('Invalid format');
        return;
      }
    }
    return true
  }
  filesDropped(file: any): void {
    console.log(file)
    this.file = file;
    const reader = new FileReader();
    this.fileSize = ((file.size) / (1024)).toFixed(2)
    this.fileName = file.name
    this.uploadStarted = true;
    reader.addEventListener("progress", event => {
      let width = Math.floor((event.loaded / event.total) * 100)
      // this.progressBarWidth = width
      if (width === 100) {
        this.fileUploaded = true
      }
    })
    reader.readAsBinaryString(file)
  }
  removeSelectedFile() {
    this.fileName = ''
    this.fileSize = ''
    this.fileUploaded = false
    this.uploadStarted = false
    this.validFile = true
  }

 
}
