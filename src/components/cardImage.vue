<template>
  <div class="bg-look">
    <div class="container">
      <div class="active">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active">Coming Soon</li>
            <li class="breadcrumb-item">
              <a href="#">Now Playing</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Opening This Week</a>
            </li>
          </ol>
        </nav>
      </div>

      <div class="cardimage">
        <div class="row">
          <div class="col-md-6" v-for="cardcontent in cardcontents" v-bind:key="cardcontent.index">
            <div class="card-section">
              <div class="card">
                <div class="notify-badge">G</div>
                <div class="notify-badge rating">4.4</div>
                <div class="row">
                  <div class="col-md-4">
                    <div>
                      <img v-bind:src="cardcontent.image" class="card-img" alt="3.jpg" />
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h5 class="card-title">{{cardcontent.title}}</h5>
                    <div class="card-text">{{cardcontent.time}}</div>

                    <div class="d-flex">
                      <div class="release mr-1 status">
                        {{cardcontent.h1}}
                        <div>{{cardcontent.date}}</div>
                      </div>

                      <div class="genre mr-1 status">
                        {{cardcontent.h2}}
                        <p>Drama</p>
                      </div>

                      <div class="language mr-1 status">
                        {{cardcontent.h3}}
                        <p>English</p>
                      </div>
                    </div>

                    <div class="d-flex">
                      <div class="star">
                        <span>
                          <font-awesome-icon :icon="['fas', 'star']" class="text-warning fa-1x" />
                        </span>

                        <span>
                          <font-awesome-icon :icon="['fas', 'star']" class="text-warning fa-1x" />
                        </span>

                        <span>
                          <font-awesome-icon :icon="['fas', 'star']" class="text-warning fa-1x" />
                        </span>

                        <span>
                          <font-awesome-icon
                            :icon="['fas', 'star-half-alt']"
                            class="text-warning fa-1x"
                          />
                        </span>

                        <div>
                          <!-- votes -->
                          <p class="card-vote">
                            <small class="vote">{{cardcontent.vote}}</small>
                          </p>
                        </div>
                      </div>
                      <div class>{{cardcontent.star}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/images/7.jpg";
import img2 from "../assets/images/6.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";

export default {
  data() {
    return {
      cardcontents: [
        {
          image: img1,
          vote: "365 votes",
          title: "Sausage Party",
          time: "02 hours 50 minutes",
          h1: "Release",
          h2: "Genre",
          h3: "Language",
          date: "Nov 15"
        },
        {
          image: img2,
          vote: "285 votes",
          title: "Bugzy Malone",
          time: "01 hour 30 minutes",
          h1: "Release",
          h2: "Genre",
          h3: "Language",
          date: "Mar 27"
        },
        {
          image: img3,
          vote: "363 votes",
          title: "The Angry Birds",
          time: "03 hours 06 minutes",
          h1: "Release",
          h2: "Genre",
          h3: "Language",
          date: "Aug 31"
        },
        {
          image: img4,
          vote: "420 votes",
          title: "Home Alone",
          time: "02 hours 30 minutes",
          h1: "Release",
          h2: "Genre",
          h3: "Language",
          date: "Apr 14"
        },
        {
          image: img5,
          vote: "263 votes",
          title: "Annabelle",
          time: "01 hour 50 minutes",
          h1: "Release",
          h2: "Genre",
          h3: "Language",
          date: "Mar 18"
        },
        {
          image: img6,
          vote: "352 votes",
          title: "Toy Story",
          time: "02 hours 10 minutes",
          h1: "Release",
          h2: "Genre",
          h3: "Language",
          date: "Dec 23"
        },
        {
          image: img7,
          vote: "350 votes",
          title: "Madmax",
          time: "01 hour 15 minutes",
          h1: "Release",
          h2: "Genre",
          h3: "Language",
          date: "Oct 08"
        },
        {
          image: img8,
          vote: "242 votes",
          title: "Girl Next Door",
          time: "02 hours 15 minutes",
          h1: "Release",
          h2: "Genre",
          h3: "Language",
          date: "Dec 31"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.bg-look {
  background: white;
  margin-top: 40px;
  .active {
    background: white;
    color: orangered;
    font-size: 30px;
    .breadcrumb {
      margin-bottom: 1rem;
      background-color: white;
      padding: 0px;
    }
  }
  .cardimage {
    position: relative;
    .card-section {
      margin-bottom: 22px;
      .card-img {
        width: 100%;
      }
      .card-title {
        margin-left: -226px;
        margin-bottom: 0.75rem;
        margin-top: 18px;
        font-size: 20px;
      }
      .card-text {
        color: orange;
        margin-left: -216px;
      }
      .d-flex {
        padding: 5px;
      }
      .mr-2 {
        margin-right: 2.5rem !important;
        margin-left: -4px;
      }
      .status {
        color: darkslategray;
        font-size: 14px;
        margin-top: 23px;
        margin-left: -15px;
        padding: 10px;
      }
      .card-vote {
        position: absolute;
        left: 1rem;
        top: 15.2rem;
      }
      .notify-badge {
        position: absolute;
        left: 31.5rem;
        top: 10px;
        background: orange;
        text-align: center;
        color: white;
        font-size: 10px;
        padding: 1px 10px 5px 8px;
        margin-left: 10px;
      }
      .rating {
        position: absolute;
        left: 16.5rem;
        top: 15.2rem;
        padding: 5px;
        background: orange;
        border-radius: 50px;
        font-size: 12px;
      }
    }
  }
  .page {
    margin-left: 450px;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .bg-look {
    background: white;
    margin-top: 40px;
    .active {
      background: white;
      color: orangered;
      font-size: 20px;
      margin-left: -1px;
      .breadcrumb {
        margin-bottom: 1rem;
        background-color: white;
        padding: 0px;
      }
    }
    .cardimage {
      position: relative;
      .card-section {
        margin-bottom: 22px;
        .card-img {
          width: 100%;
        }
        .card-title {
          margin-left: -360px;
          margin-bottom: 0.75rem;
          margin-top: -12px;
          font-size: 20px;
          padding: 18px;
        }
        .mr-2 {
          margin-right: 2.5rem !important;
          margin-left: -4px;
        }
        .status {
          color: darkslategray;
          font-size: 14px;
          margin-left: 6px;
          margin-top: 3px;
          margin-bottom: 25px;
          padding: 3px;
        }
        .card-vote {
          position: absolute;
          margin-left: 20px;
          margin-top: -121px;
        }
        .notify-badge {
          position: absolute;
          left: 29.5rem;
          top: 888px;
          background: orange;
          text-align: center;
          color: white;
          font-size: 10px;
          padding: 1px 10px 5px 8px;
          margin-left: 10px;
        }
        .rating {
          position: absolute;
          left: 20.5rem;
          top: 62.2rem;
          margin-left: -201px;
          padding: 4px;
          background: orange;
          border-radius: 50px;
          font-size: 12px;
          color: white;
        }
        .card-text {
          color: orange;
          margin-left: -346px;
          margin-top: -28px;
          margin-bottom: 1px;
        }
      }
    }
    .page {
      margin-left: 200px;
    }
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .bg-look {
    background: white;
    margin-top: 40px;
    .active {
      background: white;
      color: orangered;
      font-size: 12px;
      .breadcrumb {
        margin-bottom: 1rem;
        background-color: white;
        padding: 0px;
        margin-left: 3px;
      }
    }
    .cardimage {
      position: relative;
      .card-section {
        margin-bottom: 22px;
        .card-img {
          width: 100%;
        }
        .card-title {
          margin-left: -141px;
          margin-bottom: 0.75rem;
          margin-top: 8px;
          font-size: 20px;
          padding: 9px;
        }
        .d-flex {
          padding: 5px;
        }
        .mr-2 {
          margin-right: 2.5rem !important;
          margin-left: -4px;
        }
        .status {
          color: darkslategray;
          font-size: 12px;
          margin-left: -14px;
          margin-top: -18px;
          padding: 16px;
        }
        .card-vote {
          position: absolute;
          margin-top: -130px;
          margin-left: 7px;
        }
        .notify-badge {
          position: absolute;
          left: 15.5rem;
          top: 505px;
          background: orange;
          text-align: center;
          color: white;
          font-size: 10px;
          padding: 1px 10px 5px 8px;
          margin-left: 10px;
        }
        .rating {
          position: absolute;
          left: 5.5rem;
          top: 38.2rem;
          background: orange;
          border-radius: 50px;
          font-size: 10px;
          padding: 2px;
        }
        .card-text {
          color: orange;
          margin-left: -134px;
          margin-top: -15px;
        }
      }
    }
    .page {
      margin-left: 72px;
    }
  }
}
</style>
