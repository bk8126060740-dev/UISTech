// export const metadata = {
//   title: "Job Post - UIS TECH",
//   description: "Latest job post details from UIS TECH.",
// };

// export default function JobPostPage() {
//   return (
//     <div>
//       <h1>Job Post Page</h1>
//       <p>This page will show job post details.
//         kundan kumar
//       </p>
//     </div>
//   );
// }

export const metadata = {
  title: "Job Post - UIS TECH",
  description: "Latest job post details from UIS TECH.",
};

import JobPostClient from "./JobPostClient";

export default function JobPostPage() {
  return <JobPostClient />;
}
