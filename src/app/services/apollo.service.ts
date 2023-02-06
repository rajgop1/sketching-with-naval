import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { Apollo } from 'apollo-angular';
import { tap } from 'rxjs';
import GET_ARTS from '../apollo/queries/getArt';
import GET_ALL_FACE_OPTIONS from "../apollo/queries/getFaceOptionsQuery"
import GET_ALL_SIZE_OPTIONS from '../apollo/queries/getSizeOptions';
@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(private transferStateService: TransferStateService, private apollo: Apollo) { }
  public getFaceOptions(){
    if(isScullyGenerated()){
      return this.transferStateService.getState<ApolloQueryResult<any>>('/faces')
    }
    return this.apollo
    .watchQuery({
      query: GET_ALL_FACE_OPTIONS
    })
    .valueChanges.pipe(tap((data)=>{
      this.transferStateService.setState<ApolloQueryResult<any>>('/faces', data)
    }))
  }
  public getSizeOptions(){
    if(isScullyGenerated()){
      return this.transferStateService.getState<ApolloQueryResult<any>>('/sizes')
    }
    return this.apollo
    .watchQuery({
      query: GET_ALL_SIZE_OPTIONS
    })
    .valueChanges.pipe(tap((data)=>{
      this.transferStateService.setState<ApolloQueryResult<any>>('/sizes', data)
    }))
  }
  public getArt(){
    if(isScullyGenerated()){
      return this.transferStateService.getState<ApolloQueryResult<any>>('/arts')
    }
    return this.apollo
    .watchQuery({
      query: GET_ARTS
    })
    .valueChanges.pipe(tap((data)=>{
      this.transferStateService.setState<ApolloQueryResult<any>>('/arts', data)
    }))
  }
}
