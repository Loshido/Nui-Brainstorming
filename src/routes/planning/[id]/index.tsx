import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import "./style.css";
import { useLocation } from "@builder.io/qwik-city";
import Podium from "~/components/Classements/Podium";
import { Classe, fetchPodium } from "~/lib/graphql";

export default component$(() => {
    const loc = useLocation()
    const classements = useStore<Classe[]>([])
    const podium = useStore<{
        premier?: string,
        dexuieme?: string,
        troisieme?: string
    }>({
        premier: undefined,
        dexuieme: undefined,
        troisieme: undefined
    })
    
    useVisibleTask$(async () => {
        const data = await fetchPodium(loc.params.id)
        classements.push(...data.data.event.standings.nodes)

        if(classements.length > 0) {
            const premier = classements.find(cl => cl.placement == 1);
            if(premier) {
                podium.premier = premier.entrant.name
            }
        }
        if(classements.length > 1) {
            const dexuieme = classements.find(cl => cl.placement == 2);
            if(dexuieme) {
                podium.dexuieme = dexuieme.entrant.name
            }
        }
        if(classements.length > 2) {
            const troisieme = classements.find(cl => cl.placement == 3);
            if(troisieme) {
                podium.troisieme = troisieme.entrant.name
            }
        }
    })

    return (
        <>
            {
                classements.length > 0
                ? <Podium 
                    premier={podium.premier}
                    dexuieme={podium.dexuieme}
                    troisieme={podium.troisieme}
                    />
                : null
            }
        
            <div class="classements">
                <h1>Classements</h1>
                
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Placement</th>
                            <th scope="col">Pseudo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classements.map(cl => <tr>
                                <td>{cl.placement}</td>
                                <td>{cl.entrant.name}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
});
