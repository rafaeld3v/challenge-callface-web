interface UserProps {
  name: string;
  profileImageUrl: string;
}

export interface MessageProps {
  user: UserProps;
  body: string;
  date_formated: string;
}
