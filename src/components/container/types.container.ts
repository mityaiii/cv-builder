import { ChildrenType } from "types";

export type ContainerType = 'normal' | 'fluid'

export const containerTypeMap: Record<ContainerType, string> = {
  normal: 'w-4/5 mx-auto',
  fluid: 'w-full'
}

export interface IContainerType {
  type: ContainerType;
  className?: string;
  children?: ChildrenType;
}