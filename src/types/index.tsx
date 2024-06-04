export type LogosType = {
  image: string;
};

export type NavbarType = {
  name: string;
  href: string;
};

export type Types = {
  title: string;
  description: string;
};

export type formDataType = {
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
};

export type EmailTemplateParams = {
  from: string;
  firstName: string;
  lastName: string;
  body: string;
};