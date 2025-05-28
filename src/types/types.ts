import React from "react"

export type NotificationProps = {
    children: React.ReactNode
}

export type ButtonProps = {
    children: React.ReactNode
}

export type Image = {
  id: string,
  src: string,
  alt: string,
};

export type Project = {
  id: string,
  name: string,
  link: string,
  image: Image[] // puede tener varias imágenes
};

export type SectionSkills = {
  id: string,
  name: string,
  image: Image,// relación 1 a 1
};

export type SectionProfileType = {
  name: string,
  role: string,
  description: string
  link: string,
  image: Image // relación 1 a 1
};

export type SectionServices = {
  id: string,
  name: string,
  description: string
};

export type NavbarType = {
  name: string,
  menu: string[] // mínimo 1 elemento
};

export type AppData = {
  navbar: NavbarType,
  sectionServices: SectionServices[],
  sectionProfile: SectionProfileType,
  sectionSkills: SectionSkills[],
  sectionProject: Project[],
};

export type SectionServicesProps = {
  services: SectionServices[],
}

export type SectionSkillsProps = {
  skills: SectionSkills[]
}

export type SectionProjectProps = {
  projects: Project[]
}

export type CardProjectProps = {
  id: string,
  name: string,
  image: Image
}

export type CardServiceProps = {
  name: string,
  description: string
}

export type CardSkillProps = {
  name: string,
  image: Image
}

export type SectionBannerProps = {
  title: string,
  link?: string
}
export type SpinnerProps = {
  size?: number,
  color?: string
}