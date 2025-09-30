export interface ProfileInterface {
    message:  string;
    response: Response;
}

export interface Response {
    id:        string;
    email:     string;
    fullName:  string;
    phone:     string;
    address:   string;
    userName:  string;
    birthday:  Date;
    createdAt: Date;
    updatedAt: Date;
}
