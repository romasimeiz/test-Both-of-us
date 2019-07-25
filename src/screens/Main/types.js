// @flow
export type FileInfo = {
    uri: string,
    type: string,
    name: string,
    size: string,
}

export type MainScreenState = {
    extentors: Array<FileInfo>,
    labbar: Array<FileInfo>,
    ovrigt: Array<FileInfo>,
};
