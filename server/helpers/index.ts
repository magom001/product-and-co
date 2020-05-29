import path from 'path';

export const getImageFilePath = (fileName: string) => {
    return path.join(process.cwd(), process.env.IMAGES_PATH || '', fileName);
};
