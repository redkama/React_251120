import SubLayout from "../components/SubLayout";

function CompanyPage() {
  return (
    <SubLayout
      title="회사소개"
      desc="강한 치킨브랜드 맛닭꼬입니다"
      tabs={[
        { label: "CEO 인사말", path: "/company" },
        { label: "BI", path: "/company/" },
        { label: "연혁", path: "/company/" },
        { label: "오시는길", path: "/company/" },
      ]}
    >
      {/* 실제 콘텐츠 */}
      <img
          src={process.env.PUBLIC_URL + "/img/img_company_content.png"}
          alt="회사소개"
          style={{ width: "100%", display: "block" }}
      />
      
    </SubLayout>    
  );
}

export default CompanyPage;
