import { CustomInput } from 'components';
import { UserBodyInfoType } from 'types/auth';
import { db } from 'apis/database';
import { Container } from 'styles/bodyCheck.style';
import logoImage from '/public/images/logo.png';
import { authState } from 'store/atoms';
import { unAuthorizedCheck } from 'utils/unAuthorizedCheck';
import { useForm } from 'react-hook-form';
import { Button, FormHelperText } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import cookies from 'next-cookies';
import { useRecoilState } from 'recoil';

interface ValidateParams {
  requiredText: string;
  maxNum: number;
}

const BodyCheck = () => {
  const [{ uid, body }, setUserInfo] = useRecoilState(authState);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserBodyInfoType>();
  const bodyCheckValidate = ({ requiredText, maxNum }: ValidateParams) => {
    return {
      required: requiredText,
      validate: {
        limitNum: (value: number) => {
          if (value > maxNum || value === 0) {
            return '다시 확인해주세요';
          }
        },
      },
    };
  };
  const handleSaveBodyInfo = async (valid: UserBodyInfoType) => {
    const { gender, age, height, weight } = valid;
    try {
      await db.bodyWrite({
        collectionName: 'users',
        documentName: uid,
        body: {
          gender,
          age,
          height,
          weight,
        },
      });
      const data = await db.readDoc({ collectionName: 'users', documentName: uid });
      if (data) {
        setUserInfo((prev) => {
          return { ...prev, body: data.body };
        });
      }
      router.push('/signup/active-check');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <div className="bodyCheck__title">
        <h1>
          <Image src={logoImage} alt="lulutraining-logo" priority />
        </h1>
        <p>개인정보</p>
      </div>
      <form onSubmit={handleSubmit(handleSaveBodyInfo)}>
        <div className="bodyCheck__gender-check">
          <div className="custom-radio">
            <label htmlFor="female">
              <input
                type="radio"
                value="female"
                {...register('gender', { required: '성별을 선택해주세요' })}
                defaultChecked={body.gender === 'female' ? true : false}
              />
              <span className="female">여성</span>
            </label>
            <label htmlFor="male">
              <input
                type="radio"
                value="male"
                {...register('gender', { required: '성별을 선택해주세요' })}
                defaultChecked={body.gender === 'male' ? true : false}
              />
              <span className="male">남성</span>
            </label>
          </div>
          {errors.gender ? <FormHelperText>{errors.gender?.message}</FormHelperText> : null}
        </div>
        <CustomInput
          register={register(
            'age',
            bodyCheckValidate({ requiredText: '나이를 입력해주세요', maxNum: 120 })
          )}
          type="number"
          label="나이"
          placeholder="나이를 입력해주세요"
          autoFocus={true}
          value={body.age}
          errorMsg={errors.gender ? '' : errors.age?.message}
        />
        <div className="bodyCheck__bodyinfo">
          <div className="bodyCheck__bodyinfo-items">
            <CustomInput
              register={register(
                'height',
                bodyCheckValidate({ requiredText: '신장을 입력해주세요', maxNum: 200 })
              )}
              type="number"
              label="신장"
              placeholder="0"
              autoFocus={false}
              value={body.height}
            />
            <span>cm</span>
          </div>
          <div className="bodyCheck__bodyinfo-items">
            <CustomInput
              register={register(
                'weight',
                bodyCheckValidate({ requiredText: '체중을 입력해주세요', maxNum: 600 })
              )}
              type="number"
              label="체중"
              placeholder="0"
              autoFocus={false}
              value={body.weight}
            />
            <span>kg</span>
          </div>
          {errors.height || errors.weight ? (
            <FormHelperText>
              {errors.age ? '' : errors.height?.message || errors.weight?.message}
            </FormHelperText>
          ) : null}
        </div>
        <div className="bodyCheck__submit-button">
          <Button type="submit">완료</Button>
        </div>
      </form>
    </Container>
  );
};

export default BodyCheck;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { user } = cookies(context);
  return await unAuthorizedCheck({ user, context });
};
