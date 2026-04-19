import { useAuth } from "@/contexts/AuthContext";
import { AppLayout } from "@/components/app/AppLayout";
import FarmerHome from "./FarmerHome";
import BuyerHome from "./BuyerHome";

const AppHome = () => {
  const { role } = useAuth();
  return (
    <AppLayout>
      {role === "farmer" ? <FarmerHome /> : <BuyerHome />}
    </AppLayout>
  );
};

export default AppHome;
