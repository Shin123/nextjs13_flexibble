import { ProjectInterface } from '@/commom.types';
import { getProjectDetails } from '@/lib/action';
import { getCurrentUser } from '@/lib/session';
import React from 'react';

const Project = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  const result = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };

  if (!result?.project) {
    <p>Failed to fetch project information</p>;
  }

  console.log(result?.project);

  return <div>page</div>;
};

export default Project;
