import Banner from '@/components/homepage/banner'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import ModelCard from '@/components/model-card'
import FemalemodelData from '@/utils/data/models'

export default async function Home() {
	return (
		<div>
			<Banner />
			<MaxWidthWrapper className="">
				<div className="my-4">
					<h1 className="text-2xl sm:text-3xl font-semibold my-6">
						Explore <span className="text-destructive-foreground"> AI Girlfriends </span>- NSFW Chats
					</h1>

					<div className="flex gap-4 flex-wrap">
						{FemalemodelData.map(model => (
							<ModelCard key={model.slug} model={model} />
						))}
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}
