import Layout from "../layout/Layout";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className='w-full min-h-screen bg-gray-900'>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}
