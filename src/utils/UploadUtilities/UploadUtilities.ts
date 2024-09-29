import * as fs from 'fs';
import { BadRequest } from '@feathersjs/errors';
import { UploadToServerInterface } from './UploadUtilityInterface';

/**
 * This class contains all the utility functions
 * for upload api implementation in different
 * scenarios.
 */
export class UploadUtilities {
    /**
     * Checks and create directory if does not exist.
     *
     * @param directoryPath - The path for the directory assuming only the directory path is given without the file name.
     */
    static async checkAndCreateDirectory(directoryPath: string): Promise<void> {
        if (!directoryPath.includes('/') || fs.statSync(directoryPath, { throwIfNoEntry: false })) {
            return;
        }
        if (!fs.statSync(directoryPath, { throwIfNoEntry: false })) {
            await this.checkAndCreateDirectory(directoryPath.substring(0, directoryPath.lastIndexOf('/')));
            fs.mkdirSync(directoryPath);
        }
    }

    /**
     * It checks the path to store the file. If the path does not exist
     * then that will be created and then the File will be stored in
     * that specified location.
     *
     * @param filePath - The complete path where the file will be stored. Include the file name also.
     * @param fileBuffer - The content of the file in Buffer format.
     * @param host - The host address of the server.
     *
     * @returns The location of the file through which it can be accessed from
     * the client side and the key path for the file to be used in the server
     */
    static async uploadFileToServer(
        filePath: string,
        fileBuffer: Buffer,
        host: string,
    ): Promise<UploadToServerInterface> {
        try {
            await this.checkAndCreateDirectory(filePath.substring(0, filePath.lastIndexOf('/')));
            fs.writeFileSync(filePath, fileBuffer);
            const location = `${host}/${filePath.replace('public/', '')}`;
            return {
                Location: location,
                Key: filePath,
            };
        } catch (e: any) {
            throw new BadRequest(e.message);
        }
    }
}
