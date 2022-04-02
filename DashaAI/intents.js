{
    "version": "v2",
    "intents": {
      "yes": {
        "includes": [
          "yes",
          "correct",
          "sure",
          "absolutely",
          "yes siree bob",
          "right",
          "yep",
          "you got it",
          "I would",
          "yeah",
          "that's right",
          "I would",
          "yo",
          "yap"
        ]
      },
      "no": {
        "includes": ["no", "definitely not", "wrong", "incorrect", "I do not", "I don't", "I would not", "I wouldn't", "no, thanks", "no, thank you"],
        "excludes": ["no, I want a delivery", "no, I want it delivered"]
      },
  
      "bye": {
        "includes": [
          "bye",
          "good bye",
          "thanks bye",
          "nevermind",
          "forget about it",
          "we're done",
          "take it easy",
          "peace out boo",
          "peace"
        ]
      }
    },
  
    "entities": {
      "rating": {
        "open_set": false,
        "values": [
          {
            "value": "1",
            "synonyms": [
              "1",
              "one",
              "zero",
              "horrible",
              "worst ever",
              "the worst",
              "awful",
              "horrid",
              "despicable",
              "detestable",
              "very bad"
            ]
          },
          {
            "value": "2",
            "synonyms": ["2", "two", "bad", "quite bad", "pretty bad", "not good", "crappy"]
          },
          {
            "value": "3",
            "synonyms": ["3", "three", "alright", "okay", "just okay"]
          },
          {
            "value": "4",
            "synonyms": ["4", "four", "good", "pretty good", "quite good", "good enough"]
          },
          {
            "value": "5",
            "synonyms": ["5", "five", "amazing", "incrdible", "just grand", "perfct", "wondrful", "very good"]
          }
        ],
        "includes": [
          "I would say it was (1)[rating]",
          "I would say it was (2)[rating]",
          "I would say it was (3)[rating]",
          "I would say it was (4)[rating]",
          "I would say it was (5)[rating]",
          "(1)[rating]",
          "(2)[rating]",
          "(3)[rating]",
          "(4)[rating]",
          "(5)[rating]",
          "I had an (1)[rating] experience",
          "I had an (2)[rating] experience",
          "I had an (3)[rating] experience",
          "I had an (4)[rating] experience",
          "I had an (5)[rating] experience",
          "I'll give you a (1)[rating]",
          "I'll give you a (2)[rating]",
          "I'll give you a (3)[rating]",
          "I'll give you a (4)[rating]",
          "I'll give you a (5)[rating]"
        ]
      }
    }
  }
  