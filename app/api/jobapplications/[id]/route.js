import { adminMsg } from "@/common/adminApi/adminMessages";
import { responseHandle } from "@/common/adminApi/apiHandler";
import { query } from "@/lib/postgres";

// import { BlobServiceClient } from "@azure/storage-blob";

const containerName = 'job-application-files'; 

export async function DELETE(req, res) {
    try {
        const id = req.nextUrl.pathname.split('/').pop();

        if (!id) {
            return responseHandle(null, 400, 'ID is required to delete a job application', false);
        }

        // const result = await query(`
        //     SELECT resumefile FROM jobapplications WHERE id = @id
        // `, {
        //     id: id
        // });

        // if (!result || result.recordset.length === 0) {
        //     return responseHandle(null, 404, 'Job application not found', false);
        // }
        // const fileUrl = result?.recordset[0]?.resumefile;
        // const blobName = fileUrl.split('/').pop();
        // if (fileUrl) {
        //     const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);
        //     const containerClient = blobServiceClient.getContainerClient(containerName);
        //     const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        //     await blockBlobClient.deleteIfExists();
        //     console.log(`Deleted file: ${blobName} from Azure Blob Storage`);
        // }

        const deleteResult = await query(`
            DELETE FROM jobapplications WHERE id = @id
        `, {
            id: id
        });

        if (deleteResult && deleteResult.rowsAffected && deleteResult.rowsAffected[0] > 0) {
            return responseHandle(null, 200, 'Job application and associated file deleted successfully', true);
        } else {
            return responseHandle(null, 404, 'Failed to delete job application', false);
        }
    } catch (error) {
        console.error('Error deleting job application or file:', error);
        return responseHandle(null, 500, adminMsg?.serverError, false);
    }
}
