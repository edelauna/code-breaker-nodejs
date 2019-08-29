import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ct_Ex34 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
            int[][] m1 = {{1,2}, {3,4}};
            int[][] m2 = {{5,6}, {7,8}};
            int[][] product={{0,0},{0,0}};

            for(int i = 0; i<m1.length;i++){
                for(int j = 0; j<m2[0].length;j++){
                    int sum = 0;
                    for(int k = 0; k < m1[0].length; k++){
                        sum += m1[i][k]*m2[k][j];
                    }
                    product[i][j]=sum;
                }

            }

            System.out.println(String.format("%s", Arrays.deepToString(product)));

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
