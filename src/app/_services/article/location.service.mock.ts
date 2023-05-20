import { Observable, of } from "rxjs";
import { OverviewItem } from "src/app/_models/overview";
import { LocationService } from "./location.service";

export const dummyLocations: OverviewItem[] = [
  {
      "article_type": "location",
      "description": " The ocean east of Aldrune, now accessible through the path carved by the world serpent.",
      "pk": 206,
      "name_full": "Eastern sea",
      "name": "Eastern sea",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2021-11-12T20:20:56.008470Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " A town on the eastern edge of Aldrune.",
      "pk": 25,
      "name_full": "Eastfife",
      "name": "Eastfife",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-07-23T10:34:19.493763Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " The civilization that created it and structures on the island of heroes were known for their anti-magic. They suppressed the magical abilities of everybody and then beat them on that non-magical...",
      "pk": 272,
      "name_full": "Elevator",
      "name": "Elevator",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2022-12-06T21:35:20.848467Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " A small village, farming community, near the equinox stones. Very reminiscent of Willow before it burned down.",
      "pk": 257,
      "name_full": "Equinia",
      "name": "Equinia",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2022-04-16T14:50:13.971556Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " A place of standing stones mentioned by Kace. They are said to have sealed away chaos and a creature of the black blood.\nThere's a saying surrounding it that we were told...",
      "pk": 35,
      "name_full": "Equinox Stones",
      "name": "Equinox Stones",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2022-04-16T15:59:17.118115Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " The capital of Aldrune, guarded by Mannan's Gullet.",
      "pk": 11,
      "name_full": "Etruscan",
      "name": "Etruscan",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-07-23T10:34:19.509444Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " Headquarters of the Whisper-Rend Blood.",
      "pk": 15,
      "name_full": "Farhold",
      "name": "Farhold",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-07-23T10:34:19.515376Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " The Farmland of Etruscan located in the upper dirtside. Not in use during winter and thus used as grounds for festivals such as Winter Solstice.",
      "pk": 173,
      "name_full": "Etruscan - Upper Dirtside - Farmland",
      "name": "Farmland",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2021-02-14T14:12:03.252267Z",
      "parent_location_details": {
          "pk": 97,
          "name": "Upper Dirtside",
          "name_full": "Upper Dirtside",
          "parent_location": "Etruscan"
      },
      "parent_location": 97
  },
  {
      "article_type": "location",
      "description": " The house in which Felicia Foghound and her adjutants used to sleep during the day. It now sports several holes from our encounter with her where Murtagh blew the walls open...",
      "pk": 185,
      "name_full": "Merren - Mud lands - Felicia Foghounds Manor",
      "name": "Felicia Foghounds Manor",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2021-06-20T18:18:40.578499Z",
      "parent_location_details": {
          "pk": 183,
          "name": "Mud lands",
          "name_full": "Mud lands",
          "parent_location": "Merren"
      },
      "parent_location": 183
  },
  {
      "article_type": "location",
      "description": " A shop to buy metal goods from, armor and weapon. Recommended by Trumble.",
      "pk": 66,
      "name_full": "Hallan - Fellhammer",
      "name": "Fellhammer",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-07-23T10:58:13.279086Z",
      "parent_location_details": {
          "pk": 3,
          "name": "Hallan",
          "name_full": "Hallan",
          "parent_location": 1
      },
      "parent_location": 3
  },
  {
      "article_type": "location",
      "description": " ",
      "pk": 22,
      "name_full": "Felliman Bay",
      "name": "Felliman Bay",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-07-23T10:34:19.521416Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " ",
      "pk": 21,
      "name_full": "Fellman",
      "name": "Fellman",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-07-23T10:34:19.527967Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " A place that, according to Fen, was created by the Firbolg, who ruled the land before the Hobgoblins came. The black chaos griffon escaped towards this place and bled out here.\nRanger's...",
      "pk": 19,
      "name_full": "Firbolg Cliff Face",
      "name": "Firbolg Cliff Face",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-07-23T10:34:19.534127Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " A ship made of - at least to some degree - enchanted whalebone, allowing it to fly. They do not pay tribute to Manannan and Manannan can not find them as...",
      "pk": 193,
      "name_full": "Flying Whalebone Ship",
      "name": "Flying Whalebone Ship",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2021-07-31T11:53:53.751627Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " A very high-class inn owned by Fraich, an elven companion of Forallian.\nThe atmosphere is of one that would fit to old war-buddies exchanging stories or bygone sea-captains telling stories of old...",
      "pk": 135,
      "name_full": "Etruscan - Guild Quarters - Fraich Arc",
      "name": "Fraich Arc",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2021-03-09T21:56:27.502563Z",
      "parent_location_details": {
          "pk": 126,
          "name": "Guild Quarters",
          "name_full": "Guild Quarters",
          "parent_location": "Etruscan"
      },
      "parent_location": 126
  },
  {
      "article_type": "location",
      "description": " A mountain range, part of which is Frank. The cave of Barbatos is located here, guarded by him.",
      "pk": 162,
      "name_full": "Frank's Mountain Range",
      "name": "Frank's Mountain Range",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-11-27T20:44:06.734835Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " An inn down the road of the fancyful ferret. We slept there after our first outing in the fancyful ferret. Fairly expensive.",
      "pk": 78,
      "name_full": "Loom Arrow - Galdian",
      "name": "Galdian",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-07-23T10:58:13.443928Z",
      "parent_location_details": {
          "pk": 5,
          "name": "Loom Arrow",
          "name_full": "Loom Arrow",
          "parent_location": 1
      },
      "parent_location": 5
  },
  {
      "article_type": "location",
      "description": " A hidden village in the east of Aldrune. They make draconic glass and have a strong ties to dragons.\nThe O'Dyny settled with them for a time, but then split off after...",
      "pk": 267,
      "name_full": "Gallowglass",
      "name": "Gallowglass",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2022-08-30T20:34:09.958811Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " The New Capital of Fen's High Kingdom\n \nGalway City Breakdown\nEastern Lakeway - 15 BuildingsWestern Lakeway - 40 BuildingsMyria Island - 7 BuildingsRiver District - 46 Buildings, several temporary Refugee SheltersForest District -...",
      "pk": 50,
      "name_full": "Galway",
      "name": "Galway",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2021-05-31T16:10:30.061953Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " A location in the Galway region, a small settlement once, not really known for much but being traders with the Dwarrow",
      "pk": 46,
      "name_full": "Teeth of Galway - Glenrie Ruins",
      "name": "Glenrie Ruins",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-09-13T10:55:52.560792Z",
      "parent_location_details": {
          "pk": 146,
          "name": "Teeth of Galway",
          "name_full": "Teeth of Galway",
          "parent_location": 1
      },
      "parent_location": 146
  },
  {
      "article_type": "location",
      "description": " A rocky beach, consists mostly of pebbles and has a lot of shellfish.",
      "pk": 101,
      "name_full": "Etruscan - Glimhorgan Beach",
      "name": "Glimhorgan Beach",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-07-24T08:09:06.600687Z",
      "parent_location_details": {
          "pk": 11,
          "name": "Etruscan",
          "name_full": "Etruscan",
          "parent_location": 1
      },
      "parent_location": 11
  },
  {
      "article_type": "location",
      "description": " A mountainrange in the southeast corner Aldrune.  In it's southern portion is a Volcano created by a young Fen",
      "pk": 24,
      "name_full": "God Peaks",
      "name": "God Peaks",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2020-07-25T07:05:26.382064Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " The iron heart of aldrune, center of all forging activities here and key for metal equipment and tool supply chains. Currently headquarters of the stricken blood.",
      "pk": 13,
      "name_full": "Godrick Vale",
      "name": "Godrick Vale",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2021-05-29T10:34:03.945996Z",
      "parent_location_details": {
          "pk": 1,
          "name": "none",
          "name_full": "none",
          "parent_location": 1
      },
      "parent_location": 1
  },
  {
      "article_type": "location",
      "description": " A statue of the blackhound, that Bathilde commissioned from Shale.",
      "pk": 169,
      "name_full": "Etruscan - Guild Quarters - Public Docks and Fishing Werfs - Wooden Statue of the Blackhound",
      "name": "Wooden Statue of the Blackhound",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2021-01-24T11:25:58.611061Z",
      "parent_location_details": {
          "pk": 111,
          "name": "Public Docks and Fishing Werfs",
          "name_full": "Public Docks and Fishing Werfs",
          "parent_location": "Guild Quarters"
      },
      "parent_location": 111
  },
  {
      "article_type": "location",
      "description": " A place where the last king of the storm giants used to house, waiting for their moment to make a return.\nAlso called \"Odin's hold\".",
      "pk": 176,
      "name_full": "Aldrunian Sea - Wound of the world",
      "name": "Wound of the world",
      "campaign_details": { "name": "Aldrune", pk: 1 },
      "update_datetime": "2021-11-02T19:15:45.515776Z",
      "parent_location_details": {
          "pk": 157,
          "name": "Aldrunian Sea",
          "name_full": "Aldrunian Sea",
          "parent_location": 1
      },
      "parent_location": 157
  }
].map(
  loc => ({...loc, getAbsoluteRouterUrl: () => "/location/123"})
);


export class LocationServiceMock implements Partial<LocationService> {
  campaignList(campaign: string): Observable<OverviewItem[]> {
    return of(dummyLocations);
  }
}