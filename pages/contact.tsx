import PageStructure from 'HOC/pageStructure';

function Contact() {
  return (
    <PageStructure heading="Contact" width="md:w-3/5 text-center">
      <p className="my-5 font-normal text-2xl">Say Hi...</p>
      <a
        className="font-SG underline text-3xl font-semibold "
        href="mailo:teyimasobo@gmail.com"
      >
        teyimasobo@gmail.com
      </a>
    </PageStructure>
  );
}

export default Contact;
