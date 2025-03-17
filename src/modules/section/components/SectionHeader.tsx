import { TRelatedLink } from '@/modules/homePageContent/types'

type TSectionHeader = {
  title: string
  has_related_link: boolean
  related_link: TRelatedLink | null
  onSeeMoreClicked: (link: string) => void
}

export function SectionHeader({
  title,
  has_related_link,
  related_link,
  onSeeMoreClicked,
}: TSectionHeader) {
  return (
    <div id="sectionHeader" className="mt-10 mb-3 flex justify-between">
      <h3 className="text-xl font-bold">{title}</h3>
      {has_related_link && (
        <button
          onClick={() =>
            onSeeMoreClicked(
              `/section/${related_link?.obj_id}/${related_link?.url_alias}`,
            )
          }
          className="cursor-pointer text-xl font-semibold text-cyan-500"
        >
          بیشتر
        </button>
      )}
    </div>
  )
}
