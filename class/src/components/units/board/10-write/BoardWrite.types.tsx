import {MouseEvent, ChangeEvent} from 'react'

export interface IBoardWriteProps{
  isEdit:Boolean
  data?:any
}

export interface IMyvariables{
  number:number
  writer?:string
  title?: string
  contents?: string
}

export interface IBoardWriteUIProps{
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  isEdit: Boolean
  data?: any
}