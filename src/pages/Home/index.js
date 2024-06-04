import DashboardLayout from '../../components/Dashboard/Layout';
import EmptyPage from '../../components/Dashboard/EmptyPage';
import OverviewPage from '../../components/Dashboard/OverviewPage';

const Home = () => {
  const EmptyCart = false;
  return (
    <DashboardLayout>
      {
        EmptyCart ?
        <div>
          <EmptyPage />
        </div>
        :
        <div>
          <OverviewPage />
        </div>
      }
    </DashboardLayout>
  )
}

export default Home