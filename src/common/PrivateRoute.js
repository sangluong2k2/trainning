import { Layout } from "./Layout";

export const PrivateRoute = ({ component, ...rest }) => {
  const { titleBackground } = { ...rest };

  return (
    <Layout title={rest.title} titleBackground={titleBackground}>
      {component({ ...rest })}
    </Layout>
  );
};
