import React from "react";
import MultipleContentPage from "src/components/layout/MultipleContentPage";
import ProposalDetail from "src/containers/Proposal/Detail";
import { PROPOSAL_STATE_VETTED } from "src/constants";

const VettedProposalDetailPage = () => {
  return (
    <MultipleContentPage topBannerHeight={0}>
      {(props) => {
        return <ProposalDetail state={PROPOSAL_STATE_VETTED} {...props} />;
      }}
    </MultipleContentPage>
  );
};

export default VettedProposalDetailPage;