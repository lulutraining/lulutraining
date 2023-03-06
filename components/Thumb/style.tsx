import styled from '@emotion/styled';

export const Container = styled.div`
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;

  .thumb__box {
    background-color: transparent;
    position: relative;
  }

  .thumb__utils {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    color: #fff;
  }

  .thumb__info {
    display: flex;
    align-items: center;
    padding-left: 20px;

    .thumb__info-box {
      display: flex;
    }

    .thumb__info-detail {
      display: flex;
      align-items: center;
      margin-right: 8px;
      font-size: 12px;

      span {
        margin-left: 3px;
      }

      svg {
        font-size: 20px;
      }
    }

    .thumb__info-time {
      svg {
        font-size: 18px;
      }
    }
  }

  .thumb__bookmark {
    svg {
      color: #fff;
      font-size: 24px;
    }
  }

  .thumb__title {
    position: absolute;
    bottom: 16px;
    left: 20px;
    color: #fff;
    letter-spacing: -0.5px;
  }
`;
