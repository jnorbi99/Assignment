import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';

const MyBreadCrumb = () => (
  <Breadcrumb class="smallSpaceBefore">
    <BreadcrumbItem href="/">Events</BreadcrumbItem>
    <BreadcrumbItem href="/">Revenue reporting Q2</BreadcrumbItem>
  </Breadcrumb>
);

export default MyBreadCrumb;
