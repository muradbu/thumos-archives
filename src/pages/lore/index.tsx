import Layout from '@/components/common/Layout/Layout';
import TimelineEntry from '@/components/TimelineEntry';
import { getEntries } from '@/utils/timelineQueries';
import { GetStaticProps } from 'next';

const index = (entries) => {

	return (
		<Layout>
			<section>
				<TimelineEntry title='The night of naming' createdOn='test' />
			</section>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	const entries = await getEntries()

	return {
		props: {
			entries: entries
		}
	}
}

export default index;