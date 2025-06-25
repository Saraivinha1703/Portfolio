import { TimelineItem } from "./timeline-item";
import { TimelineList } from "./timeline-list";
import { TimelineListItem } from "./timeline-list-item";
import { TimelineRoot } from "./timeline-root";

export const Timeline = Object.assign(TimelineRoot, {
  Item: TimelineItem,
  List: TimelineList,
  ListItem: TimelineListItem,
});
