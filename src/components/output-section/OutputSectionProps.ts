/**
 * @interface InfoDataProp
 * @description InfoDataProp interface of the OutputSection component
 */
interface InfoDataProp {
  text: string;
  link?: string;
}

/**
 * @interface OutputSectionProps
 * @description This file contains the OutputSectionProps interface, which defines the props for the OutputSection component.
 */
interface OutputSectionProps {
  title: string;
  list: InfoDataProp[];
  isLink: boolean;
}

export type { OutputSectionProps, InfoDataProp };
