import React from "react";
import { Metadata } from "next";
import Header from "@/layouts/headers/header";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "../../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import BlogDetailsArea from "../../components/blogs/blog-details";
import blog_data from "@/data/blog-data";
import blog_data1 from "@/data/blog-data1";
export const metadata: Metadata = {
  title: "Blog Details",
};

const BlogDetailsDynamicPage = ({ params }: { params: { id: string } }) => {
  const blog = blog_data1.find((b) => Number(b.id) === Number(params.id))!;
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}

        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          title="Insights"
          subtitle="Read our blog from top talents"
        />
        {/*breadcrumb end */}

        {/* blog details start */}
        <BlogDetailsArea item={blog} />
        {/* blog details end */}

        {/* job portal intro start */}
        <JobPortalIntro top_border={true} />
        {/* job portal intro end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogDetailsDynamicPage;
