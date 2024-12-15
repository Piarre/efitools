import React, { HTMLAttributes, PropsWithChildren } from "react";
import {
  Card as _Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CardProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  title: string;
  description?: string;
  footer?: string;
}

const Card = ({ title, description, footer, children, ...props }: CardProps) => {
  return (
    <_Card {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description && <CardDescription className="text-md">{description}</CardDescription>}
        {children}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </_Card>
  );
};

export default Card;
