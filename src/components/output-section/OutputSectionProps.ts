/**
 * @interface List
 * @description List interface of the OutputSection component
 */
interface List {
  text: string;
  link?: string;
}

/**
 * @interface OutputSectionProps
 * @description This file contains the OutputSectionProps interface, which defines the props for the OutputSection component.
 */
interface OutputSectionProps {
  title: string;
  list: List[];
  isLink: boolean;
}

export type { OutputSectionProps, List };
