"use client";

import ContactForm from "@/pages/Contactus/ContactForm/ContactForm";
import { Close } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./ApplyForJob.css";
import { adminMsg } from "@/common/adminApi/adminMessages";
import { postJobApplicationData } from "@/common/adminApi/jobapplicationsApi";
import useAlert from "@/hook/useAlert";
import { useMediaQuery } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import AlertMessage from "../Alert/Alert";

const ApplyforJob = ({ open, handleClose, title, subtitle }) => {
  const desk1 = useMediaQuery("(max-width:1336px)");
  const desk2 = useMediaQuery("(max-width:992px)");
  const [isLoading, setIsLoading] = useState(false);
  const { alert, showAlert } = useAlert();

  /* ================= SUBMIT HANDLER ================= */
  const handleSubmitForm = async (formdata) => {
    const formData = new FormData();

    try {
      setIsLoading(true);

      // 🔥 IMPORTANT: userId (login/session se aana chahiye)
      // Abhi example ke liye hardcoded
      const userId = 101;

      /* ===== REQUIRED BY BACKEND ===== */
      formData.append("userId", userId);
      formData.append("firstName", formdata.firstName || "");
      formData.append("lastName", formdata.lastName || "");
      formData.append("fatherName", formdata.fatherName || "");
      formData.append("dob", formdata.dob || "");
      formData.append("gender", formdata.gender || ""); // 14 / 15 / 16
      formData.append("email", formdata.email || "");
      formData.append("mobileNumber", formdata.mobileNumber || "");

      /* ===== RESUME FILE (KEY MUST MATCH multer) ===== */
      if (formdata.resume) {
        formData.append("resumefile", formdata.resume);
      }

      /* ===== API CALL ===== */
      const response = await postJobApplicationData(formData);

      if (response?.success) {
        showAlert(response.message, true);
        handleClose();
      } else {
        showAlert(response?.message || adminMsg.serverError, false);
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      showAlert(adminMsg.serverError, false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        id="applyforjob-modal"
        sx={{
          ".MuiPaper-root": {
            overflow: "unset",
            borderRadius: "15px",
            maxWidth: desk2 ? "100%" : desk1 ? "55%" : "45%",
            width: "100%",
          },
        }}
      >
        <DialogTitle>
          <Box className="job-close-btn-section">
            <Box className="job-close-btn">
              <Close onClick={handleClose} />
            </Box>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Typography variant="h6">
            {title || "POST APPLYING FOR"}
          </Typography>

          <Typography variant="body2">
            {subtitle}
          </Typography>

          <Box className="job-form-section">
            <ContactForm
              formtype="applyForJob"
              jobname={subtitle}     // 🔒 read-only field in form
              onSubmit={handleSubmitForm}
              loading={isLoading}
            />
          </Box>
        </DialogContent>
      </Dialog>

      <AlertMessage
        open={alert.open}
        message={alert.message}
        success={alert.success}
      />
    </>
  );
};

export default ApplyforJob;
