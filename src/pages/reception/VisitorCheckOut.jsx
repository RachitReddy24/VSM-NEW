import { useState } from "react";


import ReceptionLayout from "../../layouts/roles/ReceptionLayout";

import CheckoutHeader from "../../components/reception/CheckoutHeader";
import VisitorCheckoutCard from "../../components/reception/VisitorCheckoutCard";
import MeetingSummary from "../../components/reception/MeetingSummary";
import ItemsChecklist from "../../components/reception/ItemsChecklist";
import SecurityChecklist from "../../components/reception/SecurityChecklist";
import ExitRemarks from "../../components/reception/ExitRemarks";
import CheckoutActions from "../../components/reception/CheckoutActions";
import CheckoutTimeline from "../../components/reception/CheckoutTimeline";
import CheckoutSuccessModal from "../../components/reception/CheckoutSuccessModal";

function VisitorCheckOut() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = () => {
    // Backend integration later
    setShowSuccess(true);
  };

  return (
    <ReceptionLayout>
      <div className="space-y-8">

        {/* Header */}
        <CheckoutHeader />

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <VisitorCheckoutCard />

          <MeetingSummary />

          <ItemsChecklist />

          <SecurityChecklist />

          <ExitRemarks />

          <CheckoutActions
            onCheckout={handleCheckout}
          />

        </div>

        {/* Timeline */}
        <CheckoutTimeline />

      </div>

      {/* Success Modal */}
      <CheckoutSuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

    </ReceptionLayout>
  );
}

export default VisitorCheckOut;