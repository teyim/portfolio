import PageStructure from 'HOC/pageStructure';

function Contact() {
  return (
    <PageStructure heading="Contact" width="md:w-3/5 text-center">
      <p className="my-5 font-normal text-2xl mt-10">Say Hi...</p>
      <a
        className="font-SG underline text-3xl font-semibold hover:gradient-text"
        href="mailto:teyimasobo@gmail.com "
      >
        teyimasobo@gmail.com
      </a>
    </PageStructure>
  );
}

export default Contact;
