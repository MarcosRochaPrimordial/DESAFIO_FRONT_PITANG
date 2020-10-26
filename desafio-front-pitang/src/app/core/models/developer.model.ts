export interface DeveloperShowModel {
    name: string;
    repoName: string;
    repoRescription: string;
}

export interface DeveloperModel {
    username: string;
    name: string;
    type: string;
    url: string;
    avatar: string;
    repo: {
        name: string;
        description: string;
        url: string;
    }
}