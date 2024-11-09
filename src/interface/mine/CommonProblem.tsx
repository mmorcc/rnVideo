export type CommonProblemList = Array<CommonProblemListItem>;

export interface CommonProblemListCommon {
  content: string;
}

export interface CommonProblemListItem extends CommonProblemListCommon {
  child: CommonProblemListCommon;
}
