import React from 'react'
import {Breeds} from '../models'
import store from '../redux/store'

type DropdownProps = {
  options: string[],
  onSelect: Function,
  label: string
}

type StoreProps = {
  breeds: Breeds,
  selection?: string,
  formIndex: number,
}

const DropdownSource = (
  WrappedComponent: React.ComponentType<DropdownProps>,
  selector: Function,
  selectAction: Function,
  label: string
) => ({ breeds, selection, formIndex }: StoreProps) => (
  <WrappedComponent
    options={selector(breeds, selection)}
    onSelect={(value: string) => {store.dispatch(selectAction(value, formIndex))}}
    label={label}
  />
)

export default DropdownSource
