
interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
}
interface CourseNormalPart extends CoursePartDescription {
    type: "normal";
}
interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
}
interface CourseSubmissionPart extends CoursePartDescription{
    type: "submission";
    exerciseSubmissionLink: string;
}

interface CourseRequirements extends CoursePartDescription{
    type: "special";
    requirements: Array<string>;
}

interface CoursePartDescription extends CoursePartBase {
  description: string
}



export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseRequirements 