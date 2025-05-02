import NewExam from "@/layouts/NewExam";
import DefaultLayout from "./DefaultLayout";

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <div className="flex-col">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Welcome To:</h2>
          </div>

          <div>
            <h1 className="uppercase text-3xl text-purple-500 font-bold text-center">Italian Brainrot animals quiz</h1>
          </div>

          <div className="flex justify-center mt-12">
            <NewExam/>
          </div>

        </div>

      </DefaultLayout>
    </>
  );
}

export default Home
