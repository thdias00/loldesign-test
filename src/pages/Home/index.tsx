import { Div, Container, FormDiv, ResultDiv } from "./style"
import Logo from "../../assets/logo.png"
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";



export const Home = () => {
    const formSchema = yup.object().shape({
        tempo: yup.string().required("Tempo Obrigatório*"),
        })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema), });

    const [source, setSource ] = useState("011")
    const [destiny, setDestiny ] = useState("016")
    const [time, setTime ] = useState("")
    const [plan, setPlan ] = useState("FaleMais30")
    const [render, setRender] =useState(false)
    const [totalWith, setTotalWith] = useState(0)
    const [totalWithout, setTotalWithout] = useState(0)
    
    const onSubmit = () => {
        setRender(true)
        if (source === '011'){
            if (destiny === '016'){
                setTotalWithout(Number(time) * 1.90)
                if (plan === 'FaleMais30' && Number(time) > 30){
                    setTotalWith((Number(time) - 30) * 2.09)
                }
                else if (plan === 'FaleMais60' && Number(time) > 60){
                    setTotalWith((Number(time) - 60) * 2.09)
                }
                else if (plan === 'FaleMais120' && Number(time) > 120){
                    setTotalWith((Number(time) - 120) * 2.09)
                }
            }
            else if (destiny === '017'){
                setTotalWithout(Number(time) * 1.70)
                if (plan === 'FaleMais30' && Number(time) > 30){
                    setTotalWith((Number(time) - 30) * 1.87)
                }
                else if (plan === 'FaleMais60' && Number(time) > 60){
                    setTotalWith((Number(time) - 60) * 1.87)
                }
                else if (plan === 'FaleMais120' && Number(time) > 120){
                    setTotalWith((Number(time) - 120) * 1.87)
                }
            }
            else if (destiny === '018'){
                setTotalWithout(Number(time) * 0.90)
                if (plan === 'FaleMais30' && Number(time) > 30){
                    setTotalWith((Number(time) - 30) * 0.99)
                }
                else if (plan === 'FaleMais60' && Number(time) > 60){
                    setTotalWith((Number(time) - 60) * 0.99)
                }
                else if (plan === 'FaleMais120' && Number(time) > 120){
                    setTotalWith((Number(time) - 120) * 0.99)
                }
            }
            else{
                setTotalWith(0)
                setTotalWithout(0)
            }
        }
        else if (source === '016'){
            if (destiny === '011'){
                setTotalWithout(Number(time) * 2.90)
                if (plan === 'FaleMais30' && Number(time) > 30){
                    setTotalWith((Number(time) - 30) * 3.19)
                }
                else if (plan === 'FaleMais60' && Number(time) > 60){
                    setTotalWith((Number(time) - 60) * 3.19)
                }
                else if (plan === 'FaleMais120' && Number(time) > 120){
                    setTotalWith((Number(time) - 120) * 3.19)
                }
            }
            else{
                setTotalWith(0)
                setTotalWithout(0)
            }
        }
        else if (source === '017'){
            if (destiny === '011'){
                setTotalWithout(Number(time) * 2.70)
                if (plan === 'FaleMais30' && Number(time) > 30){
                    setTotalWith((Number(time) - 30) * 2.97)
                }
                else if (plan === 'FaleMais60' && Number(time) > 60){
                    setTotalWith((Number(time) - 60) * 2.97)
                }
                else if (plan === 'FaleMais120' && Number(time) > 120){
                    setTotalWith((Number(time) - 120) * 2.97)
                }
            }
            else{
                setTotalWith(0)
                setTotalWithout(0)
            }
        }
        else{
            if (destiny === '011'){
                setTotalWithout(Number(time) * 1.90)
                if (plan === 'FaleMais30'){
                    setTotalWith((Number(time) - 30) * 2.09)
                }
                else if (plan === 'FaleMais60'){
                    setTotalWith((Number(time) - 60) * 2.09)
                }
                else{
                    setTotalWith((Number(time) - 120) * 2.09)
                }
            }
            else{
                setTotalWith(0)
                setTotalWithout(0)
            }
        }
    }

    return (
        <Div>
            <div>
                <img src={Logo} alt="Telzir Logo"/>
            </div>
            <Container>
                <p>Simule abaixo suas ligações para saber o gasto:</p>
                <FormDiv>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Origem:</label>
                            <select name="origem" onChange={(e) => setSource(e.target.value)}>
                                <option value="011">011</option>
                                <option value="016">016</option>
                                <option value="017">017</option>
                                <option value="018">018</option>
                            </select>
                            <label>Destino:</label>
                            <select name="destino" onChange={(e) => setDestiny(e.target.value)}>
                                <option value="016">016</option>
                                <option value="011">011</option>
                                <option value="017">017</option>
                                <option value="018">018</option>
                            </select>
                        </div>
                        <div>
                            <label>Tempo:</label>
                            <input 
                                placeholder="Tempo em Minutos" 
                                {...register("tempo")}
                                onChange={(e) => setTime(e.target.value)}/>
                            <span>{errors.tempo?.message}</span>
                        </div>
                        <div>
                            <label>Plano FaleMais:</label>
                            <select name="plano" onChange={(e) => setPlan(e.target.value)}>
                                <option value="FaleMais30">FaleMais30</option>
                                <option value="FaleMais60">FaleMais60</option>
                                <option value="FaleMais120">FaleMais120</option>
                            </select>
                        </div>
                        <button type="submit">Calcular</button>
                    </form>
                </FormDiv>
                { render &&
                <ResultDiv>
                    <p>Você irá gastar:</p>
                    <div>
                        <p>Com FaleMais: R$ {totalWith.toFixed(2)}</p>
                        <p>Sem FaleMais: R$ {totalWithout.toFixed(2)}</p>
                    </div>
                </ResultDiv>
                }
            </Container>
        </Div>
    )
}