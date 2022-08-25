import Button from 'src/elements/buttons/Button';
import PrimaryLayout from 'src/components/layouts/PrimaryLayout';
import SampleModal from 'src/components/modals/SampleModal';
import { setSampleModalOpen } from 'src/redux/slices/modalSlice';
import { PageWithLayout } from 'src/types/page';
import { useDispatch } from 'react-redux';

export default function Home(_: PageWithLayout) {
  const dispatch = useDispatch();

  return (
    <>
      <section className="flex justify-center items-center h-screen w-screen">
        <Button onClick={() => dispatch(setSampleModalOpen(true))} title="OPEN MODAL" />
      </section>
      <SampleModal />
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <PrimaryLayout title="Home Page">{page}</PrimaryLayout>;
};