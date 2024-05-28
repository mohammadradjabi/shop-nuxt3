export interface UserDTo {
  id: number;
  creationDate: string;
  name: string;
  family: string;
  phoneNumber: string;
  email: string;
  password: string;
  avatarName: string;
  isActive: boolean;
  gender: Gender;
  roles: Role[];
}
export enum Gender {
  none = 0,
  male = 1,
  female = 2,
}
export interface Role {
  roleId: number;
  roleTitle: string;
}
