export type ExperienceExtra = {
    label: string;
    url: string;
    style?: "raceplanner" | "instagram";
};

export type ExperienceItem = {
    period: string;
    title: string;
    institution: string;
    details: string[];
    extra?: ExperienceExtra[];
}
